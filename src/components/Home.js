import axios from 'axios';
import React,{useState, useEffect} from 'react'




 const Home = () => {
     const [number, setNumber]= useState(0);
     const [posts, setPosts]=useState([]);

     const getPost = async () => {
         
        try{
            const response = await 
            axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        }catch(err){
            console.log(err); 
         }
        }
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then ((data) => {
    //         console.log(data);
    //     });
    //  };

     
     useEffect(()=>{
       getPost();  
         console.log("Home mounted");
     }, [number]);

  return (
    <>
{posts.map((post)=>{
    return (
        <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        
        </>
        
    )
})}
    </>
     );
}

// cl ass Home extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state={number:0}
//     }
//     componentDidMount() {
//         console.log("Home mounted");
//     }

//     componentDidUpdate(){
//         console.log("Component updated");
//     }

//     componentWillUnmount(){
//         console.log("Home unmounted");
//     }
//     render() {
//         return (
//             <>
//         <h1>{this.state.number}</h1>
//         <Button onClick={()=>this.setState({number:this.state.number + 1})}>Add one</Button>
//         </>

//         )
        
        
//     }
// }

export default Home;