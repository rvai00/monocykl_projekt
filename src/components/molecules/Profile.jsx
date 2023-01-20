import {Name} from  "../atoms/Name"
import { Badge} from "../atoms/Badge"

export const Profile = (props) => {
    console.log(props.user.name)
    return <div><Name name={props.user.name}/> <Badge/></div>
  }
