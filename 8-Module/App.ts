const TITLE: string = 'TypeScript'
const VERSION: string = '1.0.0';

export function showMessage(): void {
    console.log(`ようこそ、${TITLE}`);
}

export class AppUtil {
    static getVersion(): string {
        return VERSION;
    }
}