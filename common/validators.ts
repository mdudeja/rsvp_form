export function validateEmail(email: string): boolean {
    const email_validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return email.trim().length > 5 && email_validator.test(email)
}