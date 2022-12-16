import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {name, imageUrl, role, id} = userDetails
  console.log(`Unique id: ${id}`)
  return (
    <li className="list-cont">
      <div className="card-cont">
        <img src={imageUrl} alt="avatar" className="avatar" />
        <div className="details-cont">
          <h1 className="name">{name}</h1>
          <p className="role">{role}</p>
        </div>
      </div>
    </li>
  )
}
export default UserProfile
