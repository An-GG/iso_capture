# node typescript notebook quickstart

Add to init file: 

```zsh
function tsnb {
  git clone https://github.com/An-GG/tsnb-template.git $1
  if [[ -n "$1" ]]; then
    cd $1;
  else
    cd tsnb-template;
  fi
  rm -rf ./.git
  echo "node_modules" > .gitignore
  git init
  git add --all
  git commit -m "init"
  vim src/index.ts
}
```
