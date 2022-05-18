import * as functions from 'firebase-functions'

export const userInviteCreated = functions.firestore
    .document('/invites/{inviteId}')
    .onCreate(async (snapshot) => {
        return Promise.resolve({
            status: 412
        })
    })
