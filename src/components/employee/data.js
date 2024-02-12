const empData = [];

for (let i = 0; i < 100; i++) {
    const employee = {
        id: i + 1,
        name: `Employee ${i + 1}`,
        designation: `Designation ${Math.floor(Math.random() * 5) + 1}`,
        department: `Department ${Math.floor(Math.random() * 5) + 1}`,
        salary: Math.floor(Math.random() * 100000) + 50000,
        dateOfJoining: new Date().toISOString().split('T')[0],
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
    };
    
    empData.push(employee);
}

export default empData;