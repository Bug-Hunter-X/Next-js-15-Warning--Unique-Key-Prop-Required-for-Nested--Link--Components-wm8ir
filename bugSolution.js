```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/about" key="about-link">
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```
By adding the `key` prop with a unique value ("about-link" in this case), the warning is eliminated.  Ensure that the key is unique within the parent component's scope.  The key can be a string, number, or symbol.