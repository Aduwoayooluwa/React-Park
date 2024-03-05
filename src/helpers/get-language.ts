export function getLanguageFromFileName(fileName: string) {
    const extension = fileName.split('.').pop();
    console.log(extension)
    switch (extension) {
        case 'js':
            return 'javascript';
        case 'ts':
            return 'typescript';
        case 'py':
            return 'python';
        case "go":
            return "go"
        default:
            return 'plaintext';
    }
}