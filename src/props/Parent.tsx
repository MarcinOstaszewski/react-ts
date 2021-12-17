import { Child } from "./Child"

const Parent = () => {
    return <Child
        color="asdfsadf"
        onClick={() => console.log('Clicked')} />
}

export {Parent};