import React, {Component} from   "react"
import 'font-awesome/css/font-awesome.min.css';
class Work extends Component{
    constructor(props)
    {
        super(props);
        this.state=
        {
            list:[

            {
                Name:"English",
                Time:"12/3/2020",
                Check:"true",
                Status:<span className="Icon-true"><i className='fas fa-clipboard-check'></i></span>
            },
            {
                Name:"Reactjs",
                Time:"15/4/2021",
                Check:"false",
                Status:<span className="Icon-false"><i className="fas fa-clipboard"></i></span>
            }
        ]
        }
    }
    Change=()=>
    {
        const input=document.querySelector(".Box_Header input");
        const List=input.value.split("=");
        const Test={
            Name:List[0],
            Time:List[1],
            Status:<span className="Icon-false"><i className="fas fa-clipboard"></i></span>
        }
        console.log(Test);
        const Todo=this.state.list;
        Todo.push(Test);
        console.log(Todo);
        this.setState({
            list:Todo
        });
        input.value="";
        
    }
    Delete=(props)=>{
        console.log(props);
        const Tododelete=this.state.list;
        
        console.log(Tododelete);
        this.setState({
            list:Tododelete.filter((item, index)=>{
                return index!==props;
            })
        })
    }
    Check=(index)=>{
        const todo=this.state.list;
        // console.log(index);
        // console.log(todo);
        // console.log(todo[1].Check);
        this.setState(
            {
            list:todo.map((item, key)=>{
                    if(key==index)
                    return{
                        Name:item.Name,
                        Time:item.Time,
                        Check:"true",
                        Status:<span className="Icon-true"><i className='fas fa-clipboard-check'></i></span>
                    }
                    else
                    return item   
                    })
            })
    }


    render()
    {
        return (
            <div>
                <div  className="Box_Header">
                  <input type="text" className="Box_control" placeholder="[Name_work] = [Vd:12/2/2020]"/>
                  <button className="Box_btn" onClick={this.Change.bind(this)}>Add</button>
                </div>
                <ul id="Box_content">

                    {this.state.list.map((item, index)=>{
                        if(item.Check=="true")
                        return(
                            <li key={index}>
                                <div className="Box_name">{item.Name} </div>
                                <span>{item.Time}</span> 
                                {item.Status}
                                <button className="Box_btn" onClick={this.Delete.bind(this, index)}>Delete</button>
                                <input type="checkbox" onChange={(e)=>{alert(e.target.checked)}}/>
                            </li>
                        )
                        else
                        {
                            return(
                                <li key={index}>
                                    <div className="Box_name">{item.Name} </div>
                                    <span>{item.Time}</span> 
                                    {item.Status}
                                    <button className="Box_btn" onClick={this.Delete.bind(this, index)}>Delete</button>
                                    <button className="Box_btn " onClick={this.Check.bind(this, index)} >Complete</button>
                                </li>

                            )
                            
                        }
                       
                    })}
                    
                 </ul>
            </div>
            
        )
    }
}
export default Work;