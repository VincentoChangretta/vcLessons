
export interface InputProps {
    name: string,
    type: string,
    placeholder: string
}

export const Input = (props: InputProps) => {
  return (
    <label>
        <input name={props.name} type={props.type} placeholder={props.placeholder} />
    </label>
  );
}
