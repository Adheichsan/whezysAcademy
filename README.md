# Panduan Penggunaan Git



## Mengunduh Repository

Unduh repository ke dalam komputer menggunakan perintah `git clone`. Url
repository dapat dilihat di dalam repository yang diinginkan.

```
git clone <url repository> <folder tujuan>
```

#### Contoh

```
user@host:~$ git clone https://github.com/datascienceid/instagram.git instagram
Cloning into 'instagram'...
remote: Counting objects: 4, done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 0), reused 4 (delta 0), pack-reused 0
Unpacking objects: 100% (4/4), done.
```

## Memperbarui Repository

Perbarui repository yang telah diunduh ke dalam komputer menggunakan perintah
`git pull`.

```
git pull origin <nama branch>
```

