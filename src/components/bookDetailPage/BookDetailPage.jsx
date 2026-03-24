import { useParams } from "react-router";

export default function BookDetailPage(){
    const { bid } = useParams();
    return(
        <h1>A list of Books: {bid}</h1>
    );
}