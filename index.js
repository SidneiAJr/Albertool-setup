#!/usr/bin/env node

const { execSync } = require('child_process')

const packages = [
  '@darkstar-cli/core',
  '@darkstar-cli/orm',
  '@darkstar-cli/cli',
  'albertool-basic',
  'constellation-cli-albertool'
]

const failed = []

console.log('🚀 Installing Albertool Setup...\n')

packages.forEach(pkg => {
  console.log(`📦 Installing ${pkg}...`)
  try {
    execSync(`npm install -g ${pkg}`, { stdio: 'inherit' })
    console.log(`✅ ${pkg} installed!\n`)
  } catch (e) {
    console.warn(`⚠️  Failed to install ${pkg}, skipping...\n`)
    failed.push(pkg)
  }
})

if (failed.length === 0) {
  console.log('✅ All installed! Go code!')
} else {
  console.log('⚠️  Installed with errors. Failed packages:')
  failed.forEach(pkg => console.log(`   ❌ ${pkg}`))
  console.log('\nTry installing them manually with: npm install -g <package>')
  process.exit(1)
}