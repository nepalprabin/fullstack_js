import './App.css';

function Profile(props) {
  return (
    <div>
    <p>{props.name} is the scientist from Britian</p>
    <p>{props.name} is the scientist from US</p>
    </div>
  )
}

export default function App() {
  console.log('Get me some amazing scientists')
  return (
    <section>
    <Profile name="Prabin" />
    <Profile name="Nepal" />
    </section>
  )
}