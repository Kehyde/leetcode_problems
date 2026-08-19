//Problem 21. Merge Two Linked Lists

//You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

var mergeTwoLists = function (list1, list2) {
  let origin = new ListNode();

  let curr = origin;

  //while list1 and list2 have data, check which node has lower value and set curr.next
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    //move curr forward for next node so its ready for next itteration
    curr = curr.next;
  }

  //clean up: After one list returns null, the list with remaining data gets assigned to curr.next completing our master list.
  if (list1) {
    curr.next = list1;
  } else {
    curr.next = list2;
  }

  //finally we return origin.next, the first node we itterated.
  return origin.next;
};
