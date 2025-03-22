import fs from 'fs';

const getPostMeta = (id: number) => {
    const meta = fs.readFileSync(`@/public/posts/${id}/meta.json`);
    return JSON.parse(JSON.stringify(meta));
}

const getPostBody = (id: number) => {
    const post = fs.readFileSync(`@/public/posts/$`)
}