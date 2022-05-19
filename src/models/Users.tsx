export interface User {
    status?: boolean,
    message?: string,
    result?: UserResult
}

export interface UserResult{
    id?: number,
    email?: string,
    password?: string,
    name?: string,
    surname?: string,
    enabled?:      boolean,
    tokenExpired?: boolean,
    roles?:        Role[]
}

export interface Role{
    id?: number,
    name?: string
}