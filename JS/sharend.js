
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://phkltpcbnwssrzmcglmu.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Upload
document.getElementById('up_but').addEventListener('click', async function() {
    const fileInput = document.getElementById('input_file');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const { data, error } = await supabase.storage.from('uploads').upload(file.name, file);
        if (error) {
            alert('Upload failed.');
            return;
        }
        const { publicURL } = supabase.storage.from('uploads').getPublicUrl(file.name);
        await supabase.from('files').insert([{ name: file.name, url: publicURL }]);
        alert(`File ${file.name} uploaded successfully.`);
    } else {
        alert('Please select a file to upload.');
    }
});

// Download
document.getElementById('down_but').addEventListener('click', async function() {
    const fileInput = document.getElementById('input_file');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const { data, error } = await supabase.from('files').select('url').eq('name', file.name).single();
        if (error || !data) {
            alert('File not found.');
            return;
        }
        const a = document.createElement('a');
        a.href = data.url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        alert('Please select a file to download.');
    }
});
