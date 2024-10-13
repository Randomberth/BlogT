

interface propsTestData {
    testData: any
}

const TestData: React.FC<propsTestData> = (  testData  ) => {
    console.log("testDataComponent", testData);
    
  return (
    <div>TestData</div>
  )
}

export default TestData