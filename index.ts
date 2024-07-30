import { config } from "@comitter/shared/utils"

const run = async () => {
  const conf = await config.read(import.meta.dir)

  console.log(conf);
}

run();

