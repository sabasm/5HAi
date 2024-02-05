import styles from "./page.module.css";
async function getData() {

  // const res = await fetch('/')
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export function TextInput() {
  return (
    <section>
      <label >
        <text>Text input:</text>
        <textarea />
      </label>
    </section>
  )
}

export default async function Home() {

  const data = await getData()

  console.log('data => ', data) // prints on server

  return (
    <section className={styles.main}>
      <h1>
        Home
      </h1>
      <text>
        5HAi, share a text get the facts
      </text>
      <div>
        <TextInput />
      </div>
    </section>
  );
}
