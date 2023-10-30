import { Checkbox } from './components/Checkbox';

function App() {
    return (
        <div className="">
            <Checkbox size="sm">Check 1</Checkbox>
            <Checkbox size="sm">Check 2</Checkbox>
            <Checkbox size="sm" isError>
                Check 3
            </Checkbox>
        </div>
    );
}

export default App;
