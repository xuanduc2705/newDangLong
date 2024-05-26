const forge = require('node-forge')
export const generateRSAkey = (dataToSign) => {
    try {
        const privateKeyPem = `-----BEGIN RSA PRIVATE KEY-----
        MIIEowIBAAKCAQEAqMDuu7wHxttQC++ERmlJMzNiM7+c6titR+JvHqWJ5d5aW2Ks
        jOi8lhFkBrNedjp1LydjmmsviJrgjeycfXaR4VyLsU+EG6IQB/b4j46KKoRuc0X0
        14AoAZN1oC9wFEvf/IfUkGY0UaM2LebPmo9bYNQsB+sL/peQ3Na+HFg+6gF2LY59
        yiH+pV/m4pcWSDxRjcqHG8zPmyE38xfOhn4kt3xW0HDjzUIcMX57/HdcxJfTnYMy
        vXd4rQbxo8HgqH7qsLQZVV0ooJ/pzppmitpDlaPBAC9uDqBmBljlZjSmfuqaVLm4
        9qfpixUaHJ5Iay1EWMBUXBCuv5sP2MeGrVW56QIDAQABAoIBABfM1h6+Hy6pobl9
        N1+i28MP3SrFPIFWu+Gmitt8p103JfE7knBxJp/Xpg7X31u3VO2olYCi21pd1YvO
        sidzwJFTNxRzzYMEMVSePWIpzUy/zsANPsHh/kJypKVJ63nBVb7M/Wq8L2bQKQUC
        R4dZ7p5Sbj9TpCZtA+5RjxB6Va00+nq6KQQw9p6xoB0nGlv2SRzcYajTYqSWvyZ4
        tKBs+vozjaiSsgMD/XE8L/YDcT45fLpHxlvYwDBSDzvrbsKDQZZzP8ghrS4s7okA
        El1y8kblLLoEPezc+O8usTEiF+l+aKq5C8h/OmhfhDoLO9lpMX85bkV3eNq9vfzg
        u1Kt8O0CgYEA64B801lsUsLiThWp9ADy6Qc6+RZmfiwoxx4TutxIWDux5QR1FJ/Z
        kEtiuuTfIi68D6+O053u8QPKO87IUNg9N1tQs2MJfNlEobO3Jz17J2zMXKkZEuTg
        BrADSSliV4BCBgUhz8nIdxZABkc5t423N6e3r+oGoXX2VF6wZASXaCsCgYEAt3Ek
        umlXyPnG1QTlK7ihl6IwNWLYzZINIyoozMIDL5O70xdyeSHGl3Eu+GWTwzjcUhM4
        Z42uB7p1JAJ9WerYT+IQYo6bM+lrml2s10l1KgMiPR3Pwk1tdEyfjMmmqEzWVGk/
        mZZ60+6PpzEcgI/FWPv0hVhQ8kcNGctjRJN+KDsCgYBSWbLMoRd89UL3dSHh/jby
        /6FCmu+qLTzxK/ZQQFlX6T/yypU6ag9FIudaXVAdfuQqRASYwUBdrSqZsVxg0MzP
        P7I/mGEn9D3IobRpF1mqVqQ7vrHS5o/kJsZvXfZSjLoJqt/A7lmYMwKeb2eiZP7t
        ikt0S0yYR0ylAhuCTgy30wKBgQCyHBkdJcsmR97WVbptiQbcw40rSJ5YesZmrjiP
        FpEhUL+9ZbawBitcP3jrlTSzCDJjPmY1pUqkFlZGcGRlObBtX4GpL+1hqfHgH7QC
        FEC+WeyUiq1+as8rbHo9qE04e+JecxJdfc4kmCzCmNyjtvRWQcxY7DcsBfCiaugn
        XU3QoQKBgFbSjj4ifBt2uHvaNX7AgtBajts9+8YySoNDMIDjCntv8CnLYMEucZ1d
        d5RvpXbpjWN9gV6z6z0JwX923nFi7x/Hfowunz28sbNcPncZ7kpyAmIMLVkecQR0
        fWoez1l28l1xJL1kZrQk6iCrDI4H7Eqt5IPYbfXmZYBu3+UuzJsq
        -----END RSA PRIVATE KEY-----`
        const privateKey = forge.pki.privateKeyFromPem(privateKeyPem)
        const md = forge.md.sha256.create()
        md.update(dataToSign, 'utf8')
        const signature = privateKey.sign(md)
        return forge.util.encode64(signature)
    } catch (error) {
        console.error('Error generating RSA key:', error)
        return ''
    }
}
