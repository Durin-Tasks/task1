export function handleChange(e, setState){
  const {name, value} = e.target;

  setState((state) => ({ ...state, [name]: value }))
}