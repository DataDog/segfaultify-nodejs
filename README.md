# segfaultify-nodejs

A native addon that always segfaults for testing purpose.

## Usage

```javascript
const { segfaultify } = require('segfaultify')

segfaultify() // Causes the process to crash with a segmentation fault.
```

## License

Apache 2.0. See LICENSE file.
