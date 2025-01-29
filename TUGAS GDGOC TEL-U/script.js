document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    let items = [];
    let editIndex = -1;

    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const itemValue = itemInput.value.trim();

        if (editIndex === -1) {
            // Create
            items.push(itemValue);
        } else {
            // Update
            items[editIndex] = itemValue;
            editIndex = -1;
        }

        itemInput.value = '';
        renderItems();
    });

    function renderItems() {
        itemList.innerHTML = '';
        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.className = 'edit';
            editButton.onclick = () => editItem(index);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteItem(index);

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            itemList.appendChild(li);
        });
    }

    function editItem(index) {
        itemInput.value = items[index];
        editIndex = index;
    }

    function deleteItem(index) {
        items.splice(index, 1);
        renderItems();
    }
});