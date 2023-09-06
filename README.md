# iso_capture
Fetch Disk Captures and Images from Platforms

## Definition

**Input**
UID + Platform ID

**Action**
Fetch All (associated?) Image and ISO Content

## Notes

- filter by
    - is retweet
    - is reply
    - is NPC or PC (non-playable content) or (playable content)
- options
    - get metadata or do not get metadata
    - output ordering for namespace

## Support
All major platforms.

## Spec

[View Design Spec](https://raw.githubusercontent.com/An-GG/iso_capture/main/SPEC.md)

##### there exists

```
$ life
```
![exists](http://cs.utexas.edu/~angg/there_exists.png)
to 
# enjoy


## Getting Started Guide


> yea so this code is giving me brain damage at this point so henceforth this is purely to be consulted as a religious document
<br><br>

```sh
$ /u/user: git clone https://github.com/An-GG/iso_capture.git
$ /u/user: cd iso_capture
$ /u/user/iso_capture: source ./setup_env.sh
$ /u/user/iso_capture: cd nb/src
$ /u/user/iso_capture/nb/src: vim index.ts

Esc     then
Shift + :   
        \______ get the colon to show up in vim
type wq     then Enter

$ /u/user/iso_capture/nb/src: cd ../../
$ /u/user/iso_capture/nb: tsc --build ./tsconfig.json
                                \______ compile TypeScript .ts files in src and stick output .js files in dist

$ /u/user/iso_capture: node ./nb/dist/index.js
                        \_____ run your index.js script with whatever node binary is on your machine

```
