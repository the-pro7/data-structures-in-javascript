class SinglyLinkedList {
	constructor() {
        this.head = null
        this.length = 0
    }

    // Linked list methods
    // First method to insert data into the list
    insertAtHead (data ) {
        const newNode = new SinglyLinkedListNode(data, this.head)
        this.head = newNode
        this.length++
    }

    // Second method for getting an element by passing in an index
    getByIndex(index) {
        if (index < 0 || index > this.length) throw new Error("Index is out of bounds")

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }

        return current
    }
}

// Linked list node
class SinglyLinkedListNode {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

module.exports = SinglyLinkedList
