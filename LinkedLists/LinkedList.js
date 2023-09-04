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

    removeHead() {
        this.head = this.head.next
        this.length--
    }

    insertAtIndex(index, data) {
        if (index === 0) return this.insertAtHead(data)
        let prev = this.getByIndex(index - 1)
        if (prev === null || (index > this.length || index < 0)) return null
        prev.next = new SinglyLinkedListNode(data, prev.next)
        this.length++
    }
}

// Linked list node
class SinglyLinkedListNode {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

// Helper function
SinglyLinkedList.fromValues = (...values) => {
    let sll = new SinglyLinkedList()
    for (let i = values.length -1; i >  0; i--) {
        sll.insertAtHead(values[i])
    }
    return sll
}

module.exports = SinglyLinkedList
