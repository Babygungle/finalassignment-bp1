// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
async function logUsers () {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const newUsers = users.map((element) => element.name);
    console.log(newUsers);
}
logUsers()