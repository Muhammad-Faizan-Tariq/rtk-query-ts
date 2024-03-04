import { useGetPostsQuery } from "./redux/api"

const App = () => {
  const { data } = useGetPostsQuery()
  return (
    <div>
      {
        data?.map((itm, idx)=>(
          <div key={idx}>
              <p>{itm.body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App