import './App.css';

function Profile({name, gradYear}) {
  // const {name, gradYear} = props
  const workExperience = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - gradYear
  }
  return (
    <div>
    <p>{name} is the scientist from Britian. He has been working for {workExperience()} years</p>
    </div>
  )
}

export default function App() {
  console.log('Get me some amazing scientists')
  return (
    <section>
    <Profile name="Prabin" gradYear="2020" />
    </section>
  )
}