import { useParams } from "react-router";
export default function BookDetailPage(){
    const { bid } = useParams(); // Hook
    return(
        <h1>A list of Books: {bid}</h1>
    );
}