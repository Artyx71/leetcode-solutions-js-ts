var addTwoNumbers = function (l1, l2) {
    var newListNode = new ListNode(0);
    var headOfNewListNode = newListNode;
    var sum = 0;
    var carry = 0;
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }
        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;
        sum = carry;
        carry = 0;
    }
    return newListNode.next;
};