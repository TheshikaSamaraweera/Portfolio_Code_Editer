// Virtual File System for Portfolio Terminal
export const virtualFileSystem = {
    '/': {
        type: 'directory',
        children: {
            'home': {
                type: 'directory',
                children: {
                    'user': {
                        type: 'directory',
                        children: {
                            'portfolio': {
                                type: 'directory',
                                children: {
                                    'about.jsx': { type: 'file', editorPath: 'about.jsx', size: '2.1KB' },
                                    'skills.jsx': { type: 'file', editorPath: 'skills.jsx', size: '3.4KB' },
                                    'projects.jsx': { type: 'file', editorPath: 'projects.jsx', size: '5.2KB' },
                                    'my_projects.jsx': { type: 'file', editorPath: 'my_projects.jsx', size: '4.8KB' },
                                    'certificates.jsx': { type: 'file', editorPath: 'certificates.jsx', size: '2.9KB' },
                                    'achievements.jsx': { type: 'file', editorPath: 'achievements.jsx', size: '3.1KB' },
                                    'articles.jsx': { type: 'file', editorPath: 'articles.jsx', size: '4.5KB' },
                                    'contact.jsx': { type: 'file', editorPath: 'contact.jsx', size: '2.3KB' },
                                    'README.md': { type: 'file', size: '1.2KB' },
                                    'package.json': { type: 'file', size: '892B' }
                                }
                            },
                            'documents': {
                                type: 'directory',
                                children: {
                                    'resume.pdf': { type: 'file', size: '245KB' }
                                }
                            }
                        }
                    }
                }
            },
            'projects': {
                type: 'directory',
                children: {
                    'web-apps': { type: 'directory', children: {} },
                    'mobile-apps': { type: 'directory', children: {} },
                    'api-projects': { type: 'directory', children: {} }
                }
            }
        }
    }
};

// Helper function to navigate the VFS
export const getNode = (path, vfs = virtualFileSystem) => {
    if (path === '/') return vfs['/'];

    const parts = path.split('/').filter(p => p);
    let current = vfs['/'];

    for (const part of parts) {
        if (current.children && current.children[part]) {
            current = current.children[part];
        } else {
            return null;
        }
    }

    return current;
};

// Get children of a directory
export const getChildren = (path) => {
    const node = getNode(path);
    if (!node || node.type !== 'directory') return null;
    return Object.keys(node.children || {});
};

// Check if path exists
export const pathExists = (path) => {
    return getNode(path) !== null;
};

// Check if path is a directory
export const isDirectory = (path) => {
    const node = getNode(path);
    return node && node.type === 'directory';
};
