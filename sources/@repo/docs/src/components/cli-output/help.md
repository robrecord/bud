━━━ bud - 0.0.0 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  $ bud <command>

━━━ Clean ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bud clean
    Clean project artifacts and caches

━━━ Compile ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bud build [--cache] [--clean] [--ci] [--debug] [--devtool #0] [--output,-o #0] [--esm] [--immutable] [--flush] [--hash] [--html] [--mode #0] [--input,-i #0] [--storage #0] [--indicator] [--log] [--manifest] [--minimize] [--modules #0] [--notify] [--browser] [--editor] [--overlay] [--publicPath #0] [--splitChunks,--vendor] [--target,-t #0] [--verbose]
    Compile source assets

  bud dev [--cache] [--clean] [--ci] [--debug] [--devtool #0] [--output,-o #0] [--esm] [--immutable] [--flush] [--hash] [--html] [--input,-i #0] [--storage #0] [--indicator] [--log] [--manifest] [--minimize] [--modules #0] [--notify] [--browser] [--editor] [--overlay] [--publicPath #0] [--splitChunks,--vendor] [--target,-t #0] [--verbose]
    Compile and serve source assets

━━━ Doctor ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  bud doctor
    Check compiled configuration against webpack

You can also print more details about any of these commands by calling them with 
the `-h,--help` flag right after the command name.