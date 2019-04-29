{
  "outbounds" : [
    {
      "sendThrough" : "0.0.0.0",
      "mux" : {
        "enabled" : false,
        "concurrency" : 8
      },
      "protocol" : "vmess",
      "settings" : {
        "vnext" : [
          {
            "address" : "202.144.193.121",
            "users" : [
              {
                "id" : "b75637c9-75f0-41ce-bf52-57d3dccf3143",
                "alterId" : 233,
                "security" : "auto",
                "level" : 0
              }
            ],
            "port" : 32698
          }
        ]
      },
      "tag" : "DGC",
      "streamSettings" : {
        "sockopt" : {

        },
        "quicSettings" : {
          "key" : "",
          "security" : "none",
          "header" : {
            "type" : "none"
          }
        },
        "tlsSettings" : {
          "allowInsecure" : false,
          "alpn" : [
            "http\/1.1"
          ],
          "serverName" : "server.cc",
          "allowInsecureCiphers" : false
        },
        "wsSettings" : {
          "path" : "",
          "headers" : {

          }
        },
        "httpSettings" : {
          "path" : "",
          "host" : [
            ""
          ]
        },
        "tcpSettings" : {
          "header" : {
            "type" : "none"
          }
        },
        "kcpSettings" : {
          "header" : {
            "type" : "none"
          },
          "mtu" : 1350,
          "congestion" : false,
          "tti" : 20,
          "uplinkCapacity" : 5,
          "writeBufferSize" : 1,
          "readBufferSize" : 1,
          "downlinkCapacity" : 20
        },
        "security" : "none",
        "network" : "tcp"
      }
    }
  ],
  "routings" : [
    {
      "name" : "all_to_main",
      "domainStrategy" : "AsIs",
      "rules" : [
        {
          "type" : "field",
          "outboundTag" : "main",
          "port" : "0-65535"
        }
      ]
    },
    {
      "name" : "bypasscn_private_apple",
      "domainStrategy" : "IPIfNonMatch",
      "rules" : [
        {
          "type" : "field",
          "outboundTag" : "direct",
          "domain" : [
            "localhost",
            "domain:me.com",
            "domain:lookup-api.apple.com",
            "domain:icloud-content.com",
            "domain:icloud.com",
            "domain:cdn-apple.com",
            "domain:apple-cloudkit.com",
            "domain:apple.com",
            "domain:apple.co",
            "domain:aaplimg.com",
            "domain:guzzoni.apple.com",
            "geosite:cn"
          ]
        },
        {
          "type" : "field",
          "outboundTag" : "direct",
          "ip" : [
            "geoip:private",
            "geoip:cn"
          ]
        },
        {
          "type" : "field",
          "outboundTag" : "main",
          "port" : "0-65535"
        }
      ]
    },
    {
      "name" : "all_to_direct",
      "domainStrategy" : "AsIs",
      "rules" : [
        {
          "type" : "field",
          "outboundTag" : "direct",
          "port" : "0-65535"
        }
      ]
    }
  ]
}
