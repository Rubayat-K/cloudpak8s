(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{FEoq:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),s=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={},i={_frontmatter:o},c=s.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["components"]);return Object(a.b)(c,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"IAM settings for OpenShift on VMware"),Object(a.b)("p",null,"After you build your OpenShift cluster on VMware, by defauilt, the user ",Object(a.b)("strong",{parentName:"p"},"kubeadmin"),"\nexists on your cluster.  That is the only user and you can use it temporarilyy.\nWhen you login to the OpenShift dashboard, you will see the warning message\nbelow. "),Object(a.b)("img",{src:"/assets/img/day2/kubeadmin.png",alt:"kubeadmin"}),Object(a.b)("p",null,"On OpenShift on VMWare, several Identity Providers are supported such as\n",Object(a.b)("strong",{parentName:"p"},"Basic Authentication"),", ",Object(a.b)("strong",{parentName:"p"},"LDAP"),", ",Object(a.b)("strong",{parentName:"p"},"OpenID"),", ",Object(a.b)("strong",{parentName:"p"},"HTPasswd"),", and others. To\nspecify an identity provider, you must create a Custom Resource (CR) that\ndescribes that identity provider and add it to the cluster.  "),Object(a.b)("p",null,"The identity provider for OpenShift that is simplest to use is ",Object(a.b)("strong",{parentName:"p"},"HTPasswd"),",\nwhich uses user passwords stored in the cluster etcd storage as a secret. In\nthis document, we will demonstrate how to add users with the\n",Object(a.b)("strong",{parentName:"p"},"HTPasswd")," identity provider.　　"),Object(a.b)("h2",null,"Configuring an HTPasswd identity provider"),Object(a.b)("p",null,"To define an ",Object(a.b)("strong",{parentName:"p"},"HTPasswd")," identity provider you must perform the following steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create an ",Object(a.b)("strong",{parentName:"li"},"htpasswd")," file to store the user and password information.\nInstructions are provided for ",Object(a.b)("a",r({parentName:"li"},{href:"#create-an-htpassword-file-on-macos"}),"MacOS"),"\nand ",Object(a.b)("a",r({parentName:"li"},{href:"#create-an-htpassword-file-on-linux"}),"Linux"),"."),Object(a.b)("li",{parentName:"ol"},"Create an OpenShift Container Platform secret to represent the ",Object(a.b)("strong",{parentName:"li"},"htpasswd"),"\nfile."),Object(a.b)("li",{parentName:"ol"},"Define the ",Object(a.b)("strong",{parentName:"li"},"HTPasswd")," identity provider resource."),Object(a.b)("li",{parentName:"ol"},"Apply the resource to the default OAuth configuration.  ")),Object(a.b)("h2",null,"Create an htpasswd file"),Object(a.b)("p",null,"To use the ",Object(a.b)("strong",{parentName:"p"},"HTPasswd")," identity provider, you must generate a flat file that\ncontains the user names and passwords for your cluster by using ",Object(a.b)("strong",{parentName:"p"},"htpasswd"),".  "),Object(a.b)("h3",null,"Prerequisites"),Object(a.b)("p",null,"Have access to the ",Object(a.b)("strong",{parentName:"p"},"htpasswd")," utility. On Red Hat Enterprise Linux this is\navailable by installing the ",Object(a.b)("strong",{parentName:"p"},"httpd-tools")," package.  "),Object(a.b)("h3",null,"Procedure"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create or update your flat file with a user name and hashed password:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"$ htpasswd -c -B -b </path/to/users.htpasswd> <user_name> <password> \nThe command generates a hashed version of the password.\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Continue to add or update credentials to the file:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"$ htpasswd -b </path/to/users.htpasswd> <user_name> <password>   \n")),Object(a.b)("p",{parentName:"li"},"NOTE: if updating an old file, drop the -c."))),Object(a.b)("a",{name:"create-an-htpassword-file-on-macos"}),Object(a.b)("h3",null,"Create an htpasswd file on MacOS"),Object(a.b)("p",null,"For example, we created an ",Object(a.b)("strong",{parentName:"p"},"htpasswd")," file on Mac as follows:  "),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ htpasswd -c -B -b users.htpasswd kenueno MyPassword!\nAdding password for user kenueno\n$ \n$ htpasswd -b users.htpasswd rstoner MyPassword!\nAdding password for user rstoner\n$ \n")),Object(a.b)("a",{name:"create-an-htpassword-file-on-linux"}),Object(a.b)("h3",null,"Create an htpasswd file on Linux"),Object(a.b)("p",null,"Here is an example to create an ",Object(a.b)("strong",{parentName:"p"},"htpasswd")," file on Linux."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ touch htpasswd\n$ \n$ htpasswd -Bb htpasswd alice 'p4ssw0rd'\nAdding password for user alice\n$ \n$ htpasswd -Bb htpasswd bob 'p4ssw0rd'\nAdding password for user bob\n$ \n$ htpasswd -Bb htpasswd claire 'p4ssw0rd'\nAdding password for user claire\n$ \n")),Object(a.b)("p",null,"Note that if you don’t have the ",Object(a.b)("strong",{parentName:"p"},"htpasswd")," command on your Linux\n(CentOS, in our case), here is how you install it."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# yum install httpd-tools\nLoaded plugins: fastestmirror, langpacks\nLoading mirror speeds from cached hostfile\n * base: mirror.dal.nexril.net\n * epel: pubmirror2.math.uh.edu\n * extras: mirror.dal.nexril.net\n * updates: mirror.dal.nexril.net\nResolving Dependencies\n--\x3e Running transaction check\n---\x3e Package httpd-tools.x86_64 0:2.4.6-90.el7.centos will be installed\n--\x3e Processing Dependency: libaprutil-1.so.0()(64bit) for package: httpd-tools-2.4.6-90.el7.centos.x86_64\n--\x3e Processing Dependency: libapr-1.so.0()(64bit) for package: httpd-tools-2.4.6-90.el7.centos.x86_64\n--\x3e Running transaction check\n---\x3e Package apr.x86_64 0:1.4.8-5.el7 will be installed\n---\x3e Package apr-util.x86_64 0:1.5.2-6.el7 will be installed\n--\x3e Finished Dependency Resolution\n\nDependencies Resolved\n\n===============================================================================================================================================\n Package                            Arch                          Version                                    Repository                   Size\n===============================================================================================================================================\nInstalling:\n httpd-tools                        x86_64                        2.4.6-90.el7.centos                        base                         91 k\nInstalling for dependencies:\n apr                                x86_64                        1.4.8-5.el7                                base                        103 k\n apr-util                           x86_64                        1.5.2-6.el7                                base                         92 k\n\nTransaction Summary\n===============================================================================================================================================\nInstall  1 Package (+2 Dependent packages)\n\nTotal download size: 286 k\nInstalled size: 584 k\nIs this ok [y/d/N]: y\nDownloading packages:\n(1/3): httpd-tools-2.4.6-90.el7.centos.x86_64.rpm                                                                       |  91 kB  00:00:00     \n(2/3): apr-1.4.8-5.el7.x86_64.rpm                                                                                       | 103 kB  00:00:00     \n(3/3): apr-util-1.5.2-6.el7.x86_64.rpm                                                                                  |  92 kB  00:00:00     \n-----------------------------------------------------------------------------------------------------------------------------------------------\nTotal                                                                                                          650 kB/s | 286 kB  00:00:00     \nRunning transaction check\nRunning transaction test\nTransaction test succeeded\nRunning transaction\n  Installing : apr-1.4.8-5.el7.x86_64                                                                                                      1/3 \n  Installing : apr-util-1.5.2-6.el7.x86_64                                                                                                 2/3 \n  Installing : httpd-tools-2.4.6-90.el7.centos.x86_64                                                                                      3/3 \n  Verifying  : apr-1.4.8-5.el7.x86_64                                                                                                      1/3 \n  Verifying  : httpd-tools-2.4.6-90.el7.centos.x86_64                                                                                      2/3 \n  Verifying  : apr-util-1.5.2-6.el7.x86_64                                                                                                 3/3 \n\nInstalled:\n  httpd-tools.x86_64 0:2.4.6-90.el7.centos                                                                                                     \n\nDependency Installed:\n  apr.x86_64 0:1.4.8-5.el7                                            apr-util.x86_64 0:1.5.2-6.el7                                           \n\nComplete!\n# \n# which htpasswd\n/usr/bin/htpasswd\n# \n")),Object(a.b)("h2",null,"Creating the HTPasswd Secret"),Object(a.b)("p",null,"To use the HTPasswd identity provider, you must define a secret that contains\nthe HTPasswd user file.  "),Object(a.b)("h3",null,"Prerequisites"),Object(a.b)("p",null,"Create an HTPasswd file.  "),Object(a.b)("h3",null,"Procedure"),Object(a.b)("p",null,"Create an OpenShift Container Platform Secret that contains the HTPasswd\nusers file."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ oc create secret generic htpass-secret --from-file=htpasswd=</path/to/users.htpasswd> -n openshift-config\n")),Object(a.b)("p",null,"In the previous example, we created a file called ",Object(a.b)("strong",{parentName:"p"},"htpasswd"),".  We will create a\nsecret from that file as follow.  "),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ oc create secret generic htpasswd --from-file=htpasswd -n openshift-config\nsecret/htpasswd created\n$\n")),Object(a.b)("p",null,"Create the manifest for the cluster secret. This is used by the authentication\nprovider to read the individual credentials.\nThis as a dry run to create a file for the manifest because the secret should\nexist already."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"oc create secret generic htpasswd-secret --from-file=htpasswd=./openshift.htpasswd  --namespace openshift-config --dry-run  --output yaml > ./htpass-secret.yaml  \n")),Object(a.b)("p",null,"Replace the existing secret, this could be done as a pipe from the previous\ncommand."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"oc replace --filename ./htpass-secret.yaml  \n")),Object(a.b)("p",null,"Then, create a yaml file for the Custom Resource (CR) as follow."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ vi oauth-config.yaml\n$ cat oauth-config.yaml \napiVersion: config.openshift.io/v1\nkind: OAuth\nmetadata:\n  name: cluster\nspec:\n  identityProviders:\n  - name: Local Password\n    mappingMethod: claim\n    type: HTPasswd\n    htpasswd:\n      fileData:\n        name: htpasswd\n$ \n")),Object(a.b)("h3",null,"Sample HTPasswd CR"),Object(a.b)("p",null,"The following Custom Resource (CR) shows the parameters and acceptable values for an HTPasswd identity provider.\n",Object(a.b)("img",r({parentName:"p"},{src:"/assets/img/day2/htpasswd_yaml.png",alt:"htpasswd_yaml"}))),Object(a.b)("h2",null,"Apply the custom resource of identity provider to the default OAuth configuration"),Object(a.b)("p",null,"Add an identity provider so your users can authenticate.  "),Object(a.b)("h3",null,"Prerequisites"),Object(a.b)("p",null,"Create an OpenShift Container Platform cluster.\nCreate the Custom Resource (CR) for your identity providers.\nYou must be logged in as an administrator.  "),Object(a.b)("h3",null,"Procedure"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Apply the defined CR:  "),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"$ oc apply -f </path/to/CR>  \n")),Object(a.b)("p",{parentName:"li"},"or you can use ",Object(a.b)("inlineCode",{parentName:"p"},"oc replace")," as follows:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"$ oc replace -f oauth-config.yaml\noauth.config.openshift.io/cluster replaced\n")),Object(a.b)("p",{parentName:"li"},"Note: If a CR does not exist, ",Object(a.b)("inlineCode",{parentName:"p"},"oc apply")," creates a new CR and might\ntrigger the following warning:  "),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"Warning: oc apply should be used on resources created by either oc create --save-config or oc apply\n")),Object(a.b)("p",{parentName:"li"},"In this case you can safely ignore this warning.  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Log in to the cluster as a user from your identity provider, entering the\npassword when prompted."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"$ oc login -u <username>  \n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Confirm that the user logged in successfully, and display the user name.  "),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",r({parentName:"pre"},{}),"$ oc whoami  \n")))),Object(a.b)("h2",null,"Configuring identity providers using the web console"),Object(a.b)("p",null,"Configure your identity provider (IDP) through the web console instead of the\nCLI.  "),Object(a.b)("h3",null,"Prerequisites"),Object(a.b)("p",null,"You must be logged in to the web console as a cluster administrator.  "),Object(a.b)("h3",null,"Procedure"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Navigate to ",Object(a.b)("strong",{parentName:"p"},"Administration → Cluster Settings"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Under the ",Object(a.b)("strong",{parentName:"p"},"Global Configuration")," tab, click ",Object(a.b)("strong",{parentName:"p"},"OAuth"),".  "),Object(a.b)("img",r({parentName:"li"},{src:"/assets/img/day2/htpasswd_GUI_1.png",alt:"htpasswd1"}))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Under the ",Object(a.b)("strong",{parentName:"p"},"Identity Providers")," section, select your identity provider\nfrom the ",Object(a.b)("strong",{parentName:"p"},"Add")," drop-down menu. "),Object(a.b)("p",{parentName:"li"},"   ",Object(a.b)("img",r({parentName:"p"},{src:"/assets/img/day2/htpasswd_GUI_2.png",alt:"htpasswd2"})),"  "),Object(a.b)("p",{parentName:"li"},"   ",Object(a.b)("img",r({parentName:"p"},{src:"/assets/img/day2/htpasswd_GUI_3.png",alt:"htpasswd3"})),"  "),Object(a.b)("p",{parentName:"li"},"   ",Object(a.b)("img",r({parentName:"p"},{src:"/assets/img/day2/htpasswd_GUI_4.png",alt:"htpasswd4"})),"  "))),Object(a.b)("p",null,"   Note: You can specify multiple IDPs through the web console without\noverwriting existing IDPs."),Object(a.b)("p",null,"   Before adding the HTPasswd, the yml file was something like this."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: config.openshift.io/v1\nkind: OAuth\nmetadata:\n  annotations:\n    release.openshift.io/create-only: 'true'\n  creationTimestamp: '2019-11-21T04:10:10Z'\n  generation: 1\n  name: cluster\n  resourceVersion: '1755'\n  selfLink: /apis/config.openshift.io/v1/oauths/cluster\n  uid: cf3d67c0-0c14-11ea-bbad-005056a57cfd\nspec: {}\n")),Object(a.b)("p",null,"After the HTPasswd was added, the yml file was updated as follows."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"apiVersion: config.openshift.io/v1\nkind: OAuth\nmetadata:\n  annotations:\n    release.openshift.io/create-only: 'true'\n  creationTimestamp: '2019-11-21T04:10:10Z'\n  generation: 2\n  name: cluster\n  resourceVersion: '3123929'\n  selfLink: /apis/config.openshift.io/v1/oauths/cluster\n  uid: cf3d67c0-0c14-11ea-bbad-005056a57cfd\nspec:\n  identityProviders:\n    - htpasswd:\n        fileData:\n          name: htpasswd-h89hn\n      mappingMethod: claim\n      name: htpasswd\n      type: HTPasswd\n")),Object(a.b)("p",null,"We would like to mention one more thing. Here is the scenario.\nWe create 3 users such as ",Object(a.b)("strong",{parentName:"p"},"alice"),", ",Object(a.b)("strong",{parentName:"p"},"bob"),", and\n",Object(a.b)("strong",{parentName:"p"},"claire")," with htpasswd as follows."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ htpasswd -Bb htpasswd alice 'p4ssw0rd'\nAdding password for user alice\n$ htpasswd -Bb htpasswd bob 'p4ssw0rd'\nAdding password for user bob\n$ htpasswd -Bb htpasswd claire 'p4ssw0rd'\nAdding password for user claire\n$ oc --user=admin create secret generic htpasswd --from-file=htpasswd -n openshift-config\nsecret/htpasswd created\n$ vi oauth-config.yaml\n$ cat oauth-config.yaml \napiVersion: config.openshift.io/v1\nkind: OAuth\nmetadata:\n  name: cluster\nspec:\n  identityProviders:\n  - name: Local Password\n    mappingMethod: claim\n    type: HTPasswd\n    htpasswd:\n      fileData:\n        name: htpasswd\n$ oc --user=admin replace -f oauth-config.yaml\noauth.config.openshift.io/cluster replaced\n$ \n")),Object(a.b)("p",null,"Now, we have 3 users created and will use the htpasswd for the authentication. Both ",Object(a.b)("strong",{parentName:"p"},"alice")," and ",Object(a.b)("strong",{parentName:"p"},"bob")," logged in the cluster successfully with their password.  However, the user ",Object(a.b)("strong",{parentName:"p"},"claire")," has not logged in the cluster yet.\nAt this moment, here is what you see with oc commands."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ oc --user=admin get users\nNAME     UID                                    FULL NAME        IDENTITIES\nalice    962fdf1e-1848-11ea-a3e1-0a580a80011d                    Local Password:alice\nbob      d0d4f046-1845-11ea-a3e1-0a580a80011d                    Local Password:bob\n\n$\n$ oc --user=admin get identities\nNAME                                                                                                          IDP NAME         IDP USER NAME                                                                                    USER NAME   USER UID\nLocal Password:alice                                                                                          Local Password   alice                                                                                            alice       962fdf1e-1848-11ea-a3e1-0a580a80011d\nLocal Password:bob                                                                                            Local Password   bob                                                                                              bob         d0d4f046-1845-11ea-a3e1-0a580a80011d\n$ \n")),Object(a.b)("p",null,"No user or identity for ",Object(a.b)("strong",{parentName:"p"},"claire")," appears because user objects are created on first login.  "),Object(a.b)("h2",null,"Disable kubeadmin Account"),Object(a.b)("p",null,"Since you will not need the ",Object(a.b)("strong",{parentName:"p"},"kubeadmin")," account to be active in your OpenShift\ncluster any more, you would disable the ",Object(a.b)("strong",{parentName:"p"},"kubeadmin")," account by removing the\npassword secret. Here are the steps to disable the ",Object(a.b)("strong",{parentName:"p"},"kubeadmin")," account.  "),Object(a.b)("h3",null,"Set up cluster admin access to your user ID."),Object(a.b)("p",null,"Before you disable the ",Object(a.b)("strong",{parentName:"p"},"kubeadmin")," account, you need to set up the\ncluster admin access to your user.",Object(a.b)("br",{parentName:"p"}),"\n","Copy the ",Object(a.b)("strong",{parentName:"p"},"kubeconfig")," file created by the OpenShift installation to your\nuser’s ",Object(a.b)("strong",{parentName:"p"},"~/.kube/config")," location."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ cp -p <OCP_installation_dir>/auth/kubeconfig <your_user_$HOME>/.kube/config\n")),Object(a.b)("p",null,"Login with your user and run the ",Object(a.b)("inlineCode",{parentName:"p"},"oc whoami")," command as follows.\nIn our case, our user is ",Object(a.b)("strong",{parentName:"p"},"bob"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ oc login -u bob -p p4ssw0rd\nLogin successful.\n\nYou don't have any projects. You can try to create a new project, by running\n\n    oc new-project <projectname>\n\n$ \n$ oc whoami\nbob\n$ \n")),Object(a.b)("p",null,"Then, you will run the oc command with the ",Object(a.b)("strong",{parentName:"p"},"—user=admin")," option to confirm\nthat your ",Object(a.b)("strong",{parentName:"p"},"kubeconfig")," admin user corresponds to the ",Object(a.b)("strong",{parentName:"p"},"system:admin"),"\ncluster account as follows."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ oc --user=admin whoami\nsystem:admin\n$ \n")),Object(a.b)("p",null,"Now, you have access as the ",Object(a.b)("strong",{parentName:"p"},"system:admin")," account using the\n",Object(a.b)("strong",{parentName:"p"},"kubeconfig")," installer file."),Object(a.b)("h3",null,"Delete the kubeadmin secret from the kube-system namespace."),Object(a.b)("p",null,"Here is the command output in our environment."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ oc --user=admin delete secret kubeadmin -n kube-system\nsecret "kubeadmin" deleted\n')),Object(a.b)("h3",null,"Confirm that the kubeadmin user is no longer accessible."),Object(a.b)("p",null,"You need to have the password of ",Object(a.b)("strong",{parentName:"p"},"kubeadmin")," user to login via the CLI.\nYou can find it in the ",Object(a.b)("strong",{parentName:"p"},"kubeadmin-password")," file under\nthe ",Object(a.b)("strong",{parentName:"p"},"<installation_dir>/auth")," directory.  "),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"cat <installation_dir>/auth/kubeadmin-password\n")),Object(a.b)("p",null,"You can get the API URL with the ",Object(a.b)("inlineCode",{parentName:"p"},"oc whoami")," command as follows."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$oc whoami --show-server\n")),Object(a.b)("p",null,"Then, you run the ",Object(a.b)("inlineCode",{parentName:"p"},"oc login")," command with the ",Object(a.b)("strong",{parentName:"p"},"kubeadmin")," user.",Object(a.b)("br",{parentName:"p"}),"\n","Here is the command output in our environment."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'$ oc login -u kubeadmin -p "$KUBEADMIN_PASSWORD" "$API_URL"\nLogin failed (401 Unauthorized)\nVerify you have provided correct credentials.\n')),Object(a.b)("h3",null,"Confirm that system:admin account is still available with the TLS authentication."),Object(a.b)("p",null,"Run the ",Object(a.b)("inlineCode",{parentName:"p"},"oc whoami")," command with ",Object(a.b)("strong",{parentName:"p"},"—user=admin")," to confirm that the\n",Object(a.b)("strong",{parentName:"p"},"system:admin")," account is still available as follows."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"$ oc --user=admin whoami\nsystem:admin\n$ \n")),Object(a.b)("h2",null,"Maintain (Add/Remove) Users as Day 2 operation"),Object(a.b)("p",null,"At the moment, you havd completed the user onboarding task with an HTPasswd\nidentity provider. As a Day 2 operation, you may need to maintain users in\nyour cluster. For example, you would periodically add/remove users due to\norganization changes, job assigment changes, users leaving the company, etc.\nYou probably would like to do such tasks as a batch job and run it once a day at\nnight, for example.  We will show you how to do it. "))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-user-user-vmware-index-mdx-aeefe4d1f87b534ac3c7.js.map