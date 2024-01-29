console.log("TypeScript Node Server");

const data = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Jane",
    age: 24,
  },
];

type Status = "ok" | "error" | "unauthorized" | "unauthenticated";
type Count = number;

const createResponse = <T>(status: Status, data: T, count: Count) => {
  return {
    status,
    data,
    count,
  };
};

const response = createResponse("unauthenticated", data, data.length);

console.log(response.data[0].name);
