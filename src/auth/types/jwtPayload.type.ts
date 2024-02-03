
export type JwtPayload = {
    id:string
    hubId: number, 
    merchantId: number,
    type: string,
    roles: number[]
}

export type JwtRefreshPayload = {
    email:string
    id:string
}

export type RefreshWithTokenPayload = JwtRefreshPayload & {refreshToken:string}

export type refreshWithFirebasePayload = {

    firebaseToken:string;
}