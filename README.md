
<!--#echo json="package.json" key="name" underline="=" -->
p-while-undef
=============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Call an async function repeatedly until it returns something other than
undefined.
<!--/#echo -->



API
---

This module exports one function:

### pWhileUndef(func, ...args)

Returns a promise for the first `func(...args)` result that is not `undefined`.



Usage
-----

see [test/usage.mjs](test/usage.mjs).



Known issues
------------

* Needs more/better tests and docs.





<!--#toc stop="scan" -->

&nbsp;


License
-------
<!--#echo json="package.json" key="license" -->
ISC
<!--/#echo -->
