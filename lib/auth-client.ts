import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react"

const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_URL,
    plugins: [
        inferAdditionalFields({
            user: {
            desiredUse:{
                type: 'string',
                required: true,
            }
         }
        })
    ]
})

export const { signUp, signOut, signIn, useSession } = authClient;