import { getNode, getChildren, pathExists, isDirectory } from '../data/virtualFileSystem';

export class TerminalCommandHandler {
    constructor(onFileOpen) {
        this.currentPath = '/home/user/portfolio';
        this.onFileOpen = onFileOpen; // Callback to open files in editor
    }

    // Navigate path (handle .., ~, relative, absolute)
    resolvePath(target) {
        if (target === '~') {
            return '/home/user';
        }

        if (target === '..') {
            if (this.currentPath === '/') return '/';
            const parts = this.currentPath.split('/').filter(p => p);
            parts.pop();
            return '/' + parts.join('/');
        }

        if (target.startsWith('/')) {
            return target; // absolute path
        }

        // Relative path
        const base = this.currentPath === '/' ? '' : this.currentPath;
        return base + '/' + target;
    }

    // pwd - Print working directory
    pwd() {
        return { output: this.currentPath, error: false };
    }

    // cd - Change directory
    cd(args) {
        if (!args || args.length === 0) {
            // cd with no args goes to home
            this.currentPath = '/home/user';
            return { output: '', error: false };
        }

        const target = args[0];
        const newPath = this.resolvePath(target);

        if (pathExists(newPath)) {
            if (isDirectory(newPath)) {
                this.currentPath = newPath;
                return { output: '', error: false };
            } else {
                return { output: `cd: not a directory: ${target}`, error: true };
            }
        } else {
            return { output: `cd: no such file or directory: ${target}`, error: true };
        }
    }

    // ls - List directory contents
    ls(args) {
        const showHidden = args.includes('-a') || args.includes('-la');
        const showDetails = args.includes('-l') || args.includes('-la');

        const children = getChildren(this.currentPath);
        if (!children) {
            return { output: 'ls: cannot access directory', error: true };
        }

        if (children.length === 0) {
            return { output: '', error: false };
        }

        if (showDetails) {
            const node = getNode(this.currentPath);
            const lines = children.map(name => {
                const child = node.children[name];
                const perms = child.type === 'directory' ? 'drwxr-xr-x' : '-rw-r--r--';
                const size = child.size || '4096';
                const date = 'Dec  6 18:00';
                return `${perms}  1 user  staff  ${size.padStart(8)}  ${date}  ${name}`;
            });
            return { output: lines.join('\n'), error: false };
        }

        return { output: children.join('  '), error: false };
    }

    // dir - Windows equivalent of ls
    dir(args) {
        return this.ls(args);
    }

    // clear - Clear terminal
    clear() {
        return { output: '', error: false, clearScreen: true };
    }

    // cls - Windows equivalent of clear
    cls() {
        return this.clear();
    }

    // code - Open file in editor
    code(args) {
        if (!args || args.length === 0) {
            return { output: 'usage: code <filename>', error: true };
        }

        const filename = args[0];
        const filePath = filename.startsWith('/')
            ? filename
            : this.currentPath + '/' + filename;

        const node = getNode(filePath);

        if (!node) {
            return { output: `code: ${filename}: No such file or directory`, error: true };
        }

        if (node.type === 'directory') {
            return { output: `code: ${filename}: is a directory`, error: true };
        }

        // If file has editorPath, open it
        if (node.editorPath) {
            this.onFileOpen?.(node.editorPath);
            return { output: `Opening ${filename} in editor...`, error: false };
        }

        return { output: `code: ${filename}: cannot open file`, error: true };
    }

    // help - Show available commands
    help() {
        const commands = [
            'Available commands:',
            '',
            '  Navigation:',
            '    pwd           - Print working directory',
            '    cd <dir>      - Change directory',
            '    cd ..         - Go up one directory',
            '    cd ~          - Go to home directory',
            '    ls            - List files and directories',
            '    ls -la        - List all files with details',
            '',
            '  File Operations:',
            '    code <file>   - Open file in editor',
            '',
            '  Terminal:',
            '    clear         - Clear terminal screen',
            '    help          - Show this help message',
            '    exit          - Close terminal',
            ''
        ];
        return { output: commands.join('\n'), error: false };
    }

    // Execute command
    execute(input) {
        const parts = input.trim().split(' ');
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        switch (command) {
            case 'pwd': return this.pwd();
            case 'cd': return this.cd(args);
            case 'ls': return this.ls(args);
            case 'dir': return this.dir(args);
            case 'clear': return this.clear();
            case 'cls': return this.cls();
            case 'code': return this.code(args);
            case 'help': return this.help();
            case 'exit': return { output: '', error: false, exit: true };
            case '': return { output: '', error: false };
            default:
                return { output: `Command not found: ${command}. Type 'help' for available commands.`, error: true };
        }
    }
}
