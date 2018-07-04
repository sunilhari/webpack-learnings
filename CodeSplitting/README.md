# The Problem

The problem with this approach is the common module lodash would be there in both the bundles and hence the resulting code that is produced is duplicated.

![Output](/CodeSplittingWrongApproach/support/develop.PNG)

# The Fix

Fix would be to enable split chunks,so that the common modules among the modules can be moved to separate chunk.