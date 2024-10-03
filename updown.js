document.getElementById('up_but').addEventListener('click', function() {
    const fileInput = document.getElementById('input_file');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        alert(`File ${file.name} uploaded successfully.`);
    } else {
        alert('Please select a file to upload.');
    }
});

document.getElementById('down_but').addEventListener('click', function() {
    const fileInput = document.getElementById('input_file');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } else {
        alert('Please select a file to download.');
    }
});