/**
 * Created by timur on 5/24/16.
 */

/**
 * Tests that the spy was called with a given argument
 *
 * @param callIndex which call
 * @param spy The spy function to test
 * @param arg which argument to test
 */
export const testArg = (callIndex, arg, spy) => expect(spy.getCall(callIndex).args[0]).to.equal(arg)

/**
 * Amount of times the spy was called
 *
 * @param amount
 * @param spy
 */
export const called = (amount, spy) => expect(spy.callCount).to.equal(amount)
