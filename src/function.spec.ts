import firebaseFunctionsTest from 'firebase-functions-test'
import {userInviteCreated} from './function'
import {getFirestoreMocksAndInit} from './firestoreStub'

const test = firebaseFunctionsTest()

describe('userInviteCreated', () => {
    const invite = {
        id: '001',
        projectId: 'projectId1',
        projectName: 'Project Name',
        originUserName: 'Hugo G',
        destinationUserInfo: 'email@example.com',
    }
    it('should return a teapot', async () => {
        // noinspection JSUnusedLocalSymbols
        // @ts-ignore
        const { update, collection, doc } = getFirestoreMocksAndInit()
        const userInviteCreatedWrapped = test.wrap(userInviteCreated)

        const snapshot = test.firestore.makeDocumentSnapshot({
            someData: "ok"
        }, `
}invites/${invite.id}`)
        await expect(userInviteCreatedWrapped(snapshot)).resolves.toEqual({
            status: 412
        })

    })
})
