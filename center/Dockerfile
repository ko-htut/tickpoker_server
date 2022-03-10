FROM hayd/alpine-deno:latest

# コンテナの中のディレクトリ
WORKDIR /center

# root ではなくユーザー deno で実行
USER deno

# .envファイルをコピー >> コンテナの/webapi
# ワイルドカードを使うことで、存在する場合のみコピーできる
COPY ./.env* .

# ソースをバンドルする >> コンテナの/webapi/src
COPY ./src ./src

# 依存関係は deps.ts が変更された時だけ更新されるようにする
COPY deps.ts .
RUN deno cache deps.ts

# メイン処理関係ファイルは変更するたびに実行される
ADD . .
RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]