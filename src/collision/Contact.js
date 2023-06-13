/**
 * The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
 *
 * @class Contact
 */

var Contact = {}

export default Contact

/**
 * Creates a new contact.
 * @method create
 * @param {vertex} vertex
 * @return {contact} A new contact
 */
Contact.create = function (vertex) {
  return {
    vertex: vertex,
    normalImpulse: 0,
    tangentImpulse: 0,
  }
}
