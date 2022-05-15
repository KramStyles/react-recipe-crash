import {useParams} from "react-router-dom";

export default function Fetched () {
    return (
        <div>
            <h1>This is the fetched page. Let's get {useParams().search}</h1>
        </div>
    )
}